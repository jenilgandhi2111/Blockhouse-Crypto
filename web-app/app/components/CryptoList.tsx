'use client';
import React, { useState, useEffect } from 'react'
import CryptoListItem from './CryptoListItem'
import { ICrypto } from './ICrypto'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import SearchBar from './SearchBar';

const CryptoList: React.FC<ICrypto> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
    const queryClient = useQueryClient()

    const fetchCryptos = async (): Promise<ICrypto[]> => {
        const response = await fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h',
            { cache: 'no-store' }
        );
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
    };

    const { data, isLoading, error, refetch, isFetching } = useQuery({
        queryKey: ['cryptos'],
        queryFn: fetchCryptos,
        staleTime: 5000,
    });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    // Filter data based on searchTerm
    const filteredData = data?.filter(crypto =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleRefresh = async () => {
        setIsRefreshing(true)
        await refetch()
        setIsRefreshing(false)
    }

    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            {isLoading ? (
                <div className="flex flex-col gap-4 w-full">
                    <div className="skeleton w-full h-16"></div>
                    <div className="skeleton w-full h-16"></div>
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-center">
                        <SearchBar onSearchChange={handleSearchChange} />
                        <button
                            onClick={handleRefresh}
                            className={`btn ${isRefreshing || isFetching ? 'btn-disabled' : 'btn-info'} ml-3 text-white`}
                            disabled={isRefreshing || isFetching}
                        >
                            {isRefreshing || isFetching ? 'Fetching .....' : 'Refresh Prices'}
                        </button>
                    </div>
                    <ul className="mt-3 list bg-base-100 rounded-box shadow-md">
                        {filteredData?.length === 0 ? (
                            <li className="list-row">
                                <div className="font-bold text-center text-white">
                                    No items found!
                                </div>
                            </li>
                        
                        ) : (
                            (filteredData?.length ? filteredData : data)?.map((crypto) => (
                                <CryptoListItem
                                    key={crypto.id}
                                    cryptoName={crypto.name}
                                    cryptoSymbol={crypto.symbol}
                                    cryptoPrice={crypto.current_price}
                                    cryptoMovement={crypto.price_change_percentage_24h}
                                    cryptoImage={crypto.image}
                                />
                            ))
                        )}
                    </ul>
                </>
            )}
        </>
    )
}

export default CryptoList
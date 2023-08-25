import { createContext, useState, ReactNode } from "react";

type SearchResult = any ;

interface SearchContextProps {
    searchResults: SearchResult[];
    setSearchResult: (results: SearchResult[]) => void;
}

interface ComponentProps {
    children: ReactNode;
}

export const SearchContext = createContext<SearchContextProps>({
    searchResults: [],
    setSearchResult: () => {},
});

export const SearchProvider: React.FC<ComponentProps> = ({ children }) => {
    const [searchResults, setSearchResult] = useState<SearchResult[]>([]);

    return (
        <SearchContext.Provider value={{ searchResults , setSearchResult }}>
            { children }
        </SearchContext.Provider>
    );
};
import React, { useState } from "react"


export type PositionContextType = {
    position: number;
    setPosition: (position: number) => void;
}

export const PositionContext = React.createContext<PositionContextType|null>(null);

export default function PositionProvider({ children }){
    const [position, setPosition] = useState<number>(0)

    return (
        <PositionContext.Provider value={{ position , setPosition}}>
            { children }
        </PositionContext.Provider>
    );
}
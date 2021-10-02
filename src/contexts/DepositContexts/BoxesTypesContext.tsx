import { useEffect, useState } from "react";
import { createContext } from "react"
import api from "../../services/api";

interface BoxTypesProps {
    id: number,
    title: string,
    percent: number,
}

type BoxType = Omit<BoxTypesProps, 'id'>;

interface BoxTypesContextProps {
    boxSettings: BoxTypesProps[],
    handleAddBoxType: (props: BoxType) => void,
}

export const BoxesTypesContext = createContext({} as BoxTypesContextProps);

const BoxesTypesContextProvider: React.FC = ( {children} ) => {
    const [boxSettings, setBoxSettings] = useState<BoxTypesProps[]>([]);

    useEffect(() => {
        async function getBoxSettings() {
            const response = await api.get('/boxSettings'); 
            setBoxSettings(response.data);
        }
        getBoxSettings();
    }, []);

    async function handleAddBoxType(boxType: BoxType){
        try {
            const response = await api.post('/boxSettings', {
                ...boxType
            });
    
            setBoxSettings([
                ...boxSettings,
                response.data
            ])
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <BoxesTypesContext.Provider
            value={{
                boxSettings,
                handleAddBoxType
            }}
        >
            {children}
        </BoxesTypesContext.Provider>
    );
}

export { BoxesTypesContextProvider }
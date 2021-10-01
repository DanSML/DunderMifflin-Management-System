import { useEffect, useState } from "react";
import { createContext } from "react"
import api from "../../services/api";


interface BoxSettingsProps {
    id: number,
    title: string,
    percent: number,
}

type BoxSettings = Omit<BoxSettingsProps, 'id'>;

interface BoxSettingsContextProps {
    boxSettings: BoxSettingsProps[],
    handleAddBoxType: (props: BoxSettings) => void,
    handleSettingsModalState: () => void,
    isModalSettingsOpen: boolean,
}

export const BoxesSettingsContext = createContext({} as BoxSettingsContextProps);

const BoxesSettingsContextProvider: React.FC = ( {children} ) => {
    const [boxSettings, setBoxSettings] = useState<BoxSettingsProps[]>([]);
    const [isModalSettingsOpen, setIsModalSettingsOpen] = useState(false);


    useEffect(() => {
        async function getBoxSettings() {
            const response = await api.get('/boxSettings'); 
            setBoxSettings(response.data);
        }
        getBoxSettings();
    }, []);

    async function handleAddBoxType(boxType: BoxSettings){
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

    function handleSettingsModalState(){
        setIsModalSettingsOpen(!isModalSettingsOpen);
    }

    return(
        <BoxesSettingsContext.Provider
            value={{
                boxSettings,
                handleAddBoxType,
                handleSettingsModalState,
                isModalSettingsOpen
            }}
        >
            {children}
        </BoxesSettingsContext.Provider>
    );
}

export { BoxesSettingsContextProvider }
import { useEffect, useState } from "react";
import { createContext } from "react"
import api from "../services/api";
import { BoxType, BoxTypesContextProps, BoxTypesProps } from "../util/interfaces/BoxTypesInterfaces";



export const BoxesTypesContext = createContext({} as BoxTypesContextProps);

const BoxesTypesContextProvider: React.FC = ( {children} ) => {
    const [boxSettings, setBoxSettings] = useState<BoxTypesProps[]>([]);
    const [editingBoxType, setEditingBoxType] = useState({} as BoxTypesProps);

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
            ]);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleUpdateBoxType(boxType: BoxType){
        try {
            const updatedBoxType = await api.put(
                `/boxSettings/${editingBoxType.id}`, 
                {
                    ...editingBoxType,
                    ...boxType,
                }
            );

            const updatedTypes = boxSettings.map(boxType => 
                boxType.id !== updatedBoxType.data.id ? boxType : updatedBoxType.data    
            );

                setBoxSettings(updatedTypes);

        } catch (err) { 
            console.log(err);
        }       
    }

    async function handleDeleteBoxType (boxTypeId: number){
        await api.delete(`/boxSettings/${boxTypeId}`);

        const filteredBoxTypes = boxSettings.filter(boxType => boxType.id !== boxTypeId);

        setBoxSettings(filteredBoxTypes);
    }

    function handleEditingBoxType(boxType: BoxTypesProps) {
        setEditingBoxType(boxType);
    }

    return(
        <BoxesTypesContext.Provider
            value={{
                boxSettings,

                handleAddBoxType,
                handleUpdateBoxType,
                handleDeleteBoxType,
                handleEditingBoxType
            }}
        >
            {children}
        </BoxesTypesContext.Provider>
    );
}

export { BoxesTypesContextProvider }
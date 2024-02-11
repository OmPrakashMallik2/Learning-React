import React, { useState } from 'react'
import data from './Data';

// single selection 
// mutiple selection

function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiselection, setEnableMultiselection] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultiSelection = (getCurrentId) => {
        let copySelected = [...multiSelected];

        const findIndexOfCurrentId = copySelected.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) {
            copySelected.push(getCurrentId);
        } else {
            copySelected.splice(findIndexOfCurrentId, 1);
        }
        setMultiSelected(copySelected);
        console.log(multiSelected)
    }

    return (
        <div className='flex h-screen justify-center items-center' style={{ width: '100vw' }}>
            <div className='w-6/12'>
                <button onClick={() => setEnableMultiselection(!enableMultiselection)} className='bg-blue-600 text-white text-2xl font-bold mb-5 text-center p-3 rounded'>Enable Multible Selection</button>
                {data && data.length > 0 ? (data.map((dataItem) => (
                    <div className='bg-purple-600 mb-4 p-5 ' key={dataItem.id}>
                        <div className='text-white flex justify-between items-center text-xl font-bold' onClick={enableMultiselection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                            <h3>{dataItem.Question}</h3>
                            <span className='cursor-pointer bg-purple-900 rounded-full py-2 px-4 font-bold' >+</span>
                        </div>
                        {
                            enableMultiselection ?
                                (multiSelected.indexOf(dataItem.id) !== -1 &&
                                    (<div className='text-white h-auto py-5'>
                                        {dataItem.Answer}
                                    </div>))
                                :
                                (selected === dataItem.id &&
                                    (<div className='text-white h-auto py-5'>
                                        {dataItem.Answer}
                                    </div>)
                                )
                        }
                    </div>
                ))) : (
                    <div>Data Not Available</div>
                )};
            </div>
        </div>
    )
}

export default Accordion

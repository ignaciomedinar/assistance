import React from 'react';
import Table from 'react-bootstrap/Table';

const List = props => {
    React.useEffect(()=>{
        console.log('Prueba')
        return()=>{
            console.log('Se desmontará');
        }
    },[]) //Así va para evitar que sea class y que sea función, se llaman hooks
    
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>John</th>
                    <th>Connor</th>
                    <th>1989/02/30</th>
                </tr>
            </tbody>
        </Table>
    )
    }
export default List;
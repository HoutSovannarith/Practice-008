'use client'

import DataTable from 'react-data-table-component';
import {useEffect, useState} from "react";
import {ProductType} from "@/lib/definitions";



export default function page(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [product, setProduct] = useState<ProductType[]>([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{},[])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState<boolean>(false);

    const columns = [
        {
            name: 'ID',
            selector: (row:any) => row.id,
        },
        {
            name: 'Title',
            selector: (row:any) => row.title,
        },
        {
            name: 'Year',
            selector: (row:any) => row.year,
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return(
        <div className="w-screen">
            <DataTable
                columns={columns}
                data={data}
                pagination={true}
            />
        </div>
    )
}
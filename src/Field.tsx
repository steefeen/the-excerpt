import {useEffect, useState} from "react";
import type {Schema} from "../amplify/data/resource.ts";
import {Button, Input, TableCell, TableRow} from "@aws-amplify/ui-react";
import {generateClient} from "aws-amplify/api";

interface FieldProps {
    field: Schema["Field"]["type"]
}

const client = generateClient<Schema>();

export default function Field({ field }: FieldProps) {

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(searchTerm)
            // Send Axios request here
        }, 3000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm]);

    function deleteField(id: string) {
        client.models.Field.delete({id: id});
    }


    return (
        <TableRow key={field.id}>
            <TableCell style={{padding: "0"}}>
                <Input
                    variation="quiet"
                    placeholder=""
                    onInput={(e) => setSearchTerm(e.currentTarget.value)}
                    onChange={(e) => setSearchTerm(e.currentTarget.value)}
                    style={{borderBottom: "0"}}
                />
            </TableCell>
            <TableCell>
                {field.type}
            </TableCell>
            <TableCell>{field.content}</TableCell>
            <TableCell>
                <Button
                    loadingText=""
                    onClick={() => deleteField(field.id)}
                >
                    Löschen
                </Button>
            </TableCell>

        </TableRow>
    );
}
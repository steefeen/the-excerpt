import {useLoaderData} from "react-router-dom";
import {generateClient} from "aws-amplify/api";
import type {Schema} from "../amplify/data/resource.ts";
import {
    Button,
    Card,
    Flex,
    Heading,
    Input,
    ScrollView,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@aws-amplify/ui-react";
import {useEffect, useState} from "react";

import FieldCreateForm, {FieldCreateFormInputValues} from '../ui-components/FieldCreateForm';
import Field from "./Field.tsx";

const client = generateClient<Schema>();

export default function Post() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { post } = useLoaderData();

    const [fields, setFields] = useState<Array<Schema["Field"]["type"]>>([]);


    useEffect(() => {
        const sub = client.models.Field.onCreate({
            filter: {
                postId: {
                    contains: post.id,
                },
            },
        }).subscribe({
            next: (data) =>  setFields(oldValue =>[...oldValue, data]),
            error: (error) => console.warn(error),
        });

        return () => sub.unsubscribe();
    }, [post.id]);

    useEffect(() => {
        const sub = client.models.Field.onDelete({
            filter: {
                postId: {
                    contains: post.id,
                },
            },
        }).subscribe({
            next: (data) =>  setFields(oldValue => oldValue.filter(f => f.id !== data.id)),
            error: (error) => console.warn(error),
        });

        return () => sub.unsubscribe();
    }, [post.id]);


    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        post.fields().then(data => setFields(data.data));
    }, [post]);


    // const [files, setFiles] = useState([]);
    // const hiddenInput = useRef(null);
    // const acceptedFileTypes = ['image/png', 'image/jpeg'];
    //
    // const onFilePickerChange = (event) => {
    //     const { files } = event.target;
    //     if (!files || files.length === 0) {
    //         return;
    //     }
    //     setFiles(Array.from(files));
    // };

    return (
        <div id="post">
            <Card>
                asdf
            </Card>
            <ScrollView style={{height: "calc(100vh - 72px)"}}>
                <div style={{padding: "0rem 4rem"}}>

                    <Card>

                        <Heading
                            width='30vw'
                            level={1}
                            isTruncated={true}
                        >
                            {post.title}
                        </Heading>
                    </Card>
                    <Card>


                        <Table
                            caption=""
                            variation="bordered"
                            highlightOnHover={false}>
                            <TableHead>
                                <TableRow>
                                    <TableCell as="th">Überschrift</TableCell>
                                    <TableCell as="th" style={{width: "100px"}}>Typ</TableCell>
                                    <TableCell as="th">Inhalt</TableCell>
                                    <TableCell as="th" style={{width: "100px"}}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {fields.map(field => (
                                    <Field key={field.id} field={field}/>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <Card>
                        <FieldCreateForm
                            onSubmit={(fields: FieldCreateFormInputValues) => {
                                (fields as Schema["Field"]["type"]).postId = post.id
                                return fields
                            }}
                        />
                    </Card>

                    <Card>
                        {/*<DropZone*/}
                        {/*    acceptedFileTypes={acceptedFileTypes}*/}
                        {/*    onDropComplete={({ acceptedFiles, rejectedFiles }) => {*/}
                        {/*        setFiles(acceptedFiles);*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <Flex direction="column" alignItems="center">*/}
                        {/*        <Text>Drag images here or</Text>*/}
                        {/*        <Button size="small" onClick={() => hiddenInput.current.click()}>*/}
                        {/*            Browse*/}
                        {/*        </Button>*/}
                        {/*    </Flex>*/}
                        {/*    <VisuallyHidden>*/}
                        {/*        <input*/}
                        {/*            type="file"*/}
                        {/*            tabIndex={-1}*/}
                        {/*            ref={hiddenInput}*/}
                        {/*            onChange={onFilePickerChange}*/}
                        {/*            multiple={true}*/}
                        {/*            accept={acceptedFileTypes.join(',')}*/}
                        {/*        />*/}
                        {/*    </VisuallyHidden>*/}
                        {/*</DropZone>*/}
                        {/*{files.map((file) => (*/}
                        {/*    <Text key={file.name}>{file.name}</Text>*/}
                        {/*))}*/}

                        <Flex direction="row"  justifyContent="space-between" style={{marginTop: "8px"}}>
                            <Input
                                style={{maxWidth: "200px"}}
                                placeholder="Baggins"
                            />
                            <Button   variation="primary"
                                      size="large" onClick={() => {}}>
                                Submit
                            </Button>
                        </Flex>
                    </Card>
                </div>
            </ScrollView>

</div>
)
    ;
}

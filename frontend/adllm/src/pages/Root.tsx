import {
    Card,
    Divider,
    Text
} from '@aws-amplify/ui-react';

export default function RootLayout() {

    return (
        <div className="p-6 text-gray-700">
                                <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
                                <p>This web app contains a cover letter written in the voice of anpther person about Nicholas Corbett and why he would be a great fit at Analog Devices.</p>
                                <p className="mt-2">Feel free to explore the other models using the sidebar to chat with the LLMs that helped write the cover letter and use RAG to speak in 
                                    differnt peoples tone of voice.</p>
        
                                <Card variation="elevated" className="bg-white shadow-md p-4 items-center justify-between ">
                                    <Text
                                        variation="primary"
                                        as="p"
                                        lineHeight="1.5em"
                                        fontWeight={800}
                                        fontSize="1em"
                                        fontStyle="normal"
                                        textDecoration="none"
                                        width="30vw"
                                    >
                                        Hello World!
                                    </Text>
                                    <Divider
                                        orientation="horizontal" />
                                    <Text>After</Text>
        
                                </Card>
        
                            </div>
    )
}
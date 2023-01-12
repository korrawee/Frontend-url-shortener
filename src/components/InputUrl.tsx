import { useState } from "react";
import { createUrl } from "../utils/api/url";

export const InputUrl: React.FC<any> = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const onSubmit = async (text: string) =>{
        const shortUrl: string = await createUrl(text);
        setValue(shortUrl);
        setVisible(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(value);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(value);
        setValue('');
    };
    return (
        <div className="relative">
            {visible && <button className="absolute right-20 top-8 text-gray-500 active:text-black" onClick={handleCopyClick}>copy</button>}
            <form className="w-fit flex justify-center items-center mt-6" onSubmit={handleSubmit}>
                <input className="bg-white text-gray-900 rounded-md py-2 px-4 w-96 shadow-sm hover:shadow-
                        md-2 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800" 
                        type="text" 
                        placeholder="http://"
                        value={value === "undefined" ? "" : value}
                        onChange={(e) => setValue(e.target.value)}/>
                <button className="bg-indigo-500 p-2 text-white rounded-md hover:bg-indigo-600" type="submit">Submit</button>
            </form>
        </div>
    );
};

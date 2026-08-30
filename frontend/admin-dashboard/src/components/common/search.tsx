import { ReactNode } from "react";
import { Input } from "../ui/input";



export const Searchbar = ():ReactNode =>{
    
    return (
      <div>
        <Input
          placeholder="Search..."
          className="w-72 rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
        ></Input>
      </div>
    );
}
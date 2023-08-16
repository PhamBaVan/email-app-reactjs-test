import { Dispatch, createContext } from "react";
import { Emails } from "../types/Emails";

interface GlobalContext {
  emails: Emails[];
  setEmails: Dispatch<React.SetStateAction<Emails[]>>;
}

export const GlobalContext = createContext<GlobalContext>({
  emails: [],
  setEmails: () => {
    return;
  },
});

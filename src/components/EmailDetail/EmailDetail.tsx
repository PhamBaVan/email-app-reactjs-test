import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/global";

const EmailDetail = () => {
  const { id } = useParams();
  const { emails, setEmails } = useContext(GlobalContext);
  useEffect(() => {
    setEmails((emails) =>
      emails.map((email) => {
        if (email.id === id) {
          email.unread = true;
        }
        return email;
      })
    );
  }, [emails]);
  return <div></div>;
};

export default EmailDetail;

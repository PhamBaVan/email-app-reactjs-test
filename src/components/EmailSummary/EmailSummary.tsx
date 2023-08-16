import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/global";

import styles from "./EmailSummary.module.css";
import { Emails } from "../../types/Emails";

const filterEmail = (emails: Emails[], folder: string) => {
  return emails
    .filter((email) => email.folder === folder)
    .sort((a, b) => (new Date(b.timestamp) > new Date(a.timestamp) ? 1 : -1));
};

const EmailSummary = () => {
  const { folder, id } = useParams();
  const navigate = useNavigate();
  const chooseInbox = (id: string) => {
    navigate(folder + "/" + id);
  };
  const { emails } = useContext(GlobalContext);
  return (
    <div>
      <div style={{ height: "100vh" }}>
        {filterEmail(emails, folder as string).map((item, index) => (
          <div
            onClick={() => chooseInbox(item.id)}
            className={`${styles.inboxContainer} ${
              item.unread === false ? styles.unreadInbox : ""
            } ${item.id === id ? styles.active : ""}`}
            key={index}
          >
            <div className={styles.inboxColLeft}>
              <img src={item.from.avatarUrl} alt="" />
            </div>
            <div className={styles.inboxColRight}>
              <div className={styles.nameTimeContainer}>
                <h5>{item.from.name}</h5>
                <p>{item.timestamp.slice(0, item.timestamp.search("T"))}</p>
              </div>
              <div className={styles.inboxTitleContent}>
                <h4>{item.main.title}</h4>
                <p>{item.main.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailSummary;

import { TwitterShareButton, LinkedinShareButton } from "react-share";
import './style.scss'
export const ShareModal = () => {

  const url = "geonodes.xyz" // replace with correct url

  return (
    <div className="share-container">
      <TwitterShareButton url={url}>
        <button className="action-button" style={{width: '90%'}}>
                Twitter
        </button>
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <button className="action-button" style={{width: '90%'}}>
                LinkedIn
        </button>
      </LinkedinShareButton>
    </div>
  );
};

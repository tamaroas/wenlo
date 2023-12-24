import React from 'react';
import styles from './DownloadInvoicePopup.module.scss';
import imageService from '../../../../utils/ImageService';
import { FaCheckCircle, FaSnapchat } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const images = imageService.getImages();

const DownloadInvoicePopup = ({handleClose}:{handleClose: ()=>void}) => {
  const handleClick = ()=>{
    handleClose()
  }
  return (
    <div className={styles.popup}
    onClick={e =>{
      if (e.target === e.currentTarget) {
        handleClose()
      }
    }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={images['wenlo-logo']} alt="wenlo" height={24} />
          <p>
            Invoice <span style={{ color: '#3949A1' }}>#8FB28438-0001</span>
          </p>
          <div className={styles.result + ' ' + styles.success}>
            <FaCheckCircle color={'#147A3D'} size={18} />
            <span>Your request is done</span>
          </div>
          <button onClick={handleClick}>
            <FaXmark />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.section1}>
            <span>Customer</span>
            <p>Gabriela Hudges</p>
            <span>Email</span>
            <p>Gabrielahudges@gmail.com</p>
            <span>Receipt #</span>
            <p>901839810</p>
            <span>Date Paid</span>
            <p>April 24, 2023</p>
            <span>Company name</span>
            <p>Snapchat</p>
            <span>Address</span>
            <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            <span>Country</span>
            <p>USA</p>
            <span>Payment Method</span>
            <p>Visacard</p>
          </div>

          <div className={styles.section2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <circle cx="14" cy="14" r="12.25" fill="#FFFA37" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.3973 7.16232C17.5525 6.09769 16.1589 5.25 14.0103 5.25C12.1705 5.26812 8.49081 6.2864 8.49081 10.2145C8.49081 10.7882 8.53622 11.5565 8.5759 12.1224C8.52913 12.1088 8.47164 12.0833 8.38053 12.0397L8.36787 12.0336C8.20676 11.9562 7.96178 11.8386 7.62108 11.8386C7.2769 11.8386 6.9441 11.9734 6.69703 12.1733C6.45145 12.372 6.24167 12.6774 6.24167 13.0467C6.24167 13.5086 6.50161 13.8152 6.80556 14.0118C7.07553 14.1865 7.41596 14.298 7.68544 14.3863L7.71209 14.395C8.00055 14.4896 8.21196 14.5618 8.35773 14.6526C8.47119 14.7233 8.48841 14.7681 8.49054 14.8106C8.48906 14.8166 8.4856 14.8297 8.47804 14.8509C8.46249 14.8946 8.43661 14.9537 8.39879 15.0275C8.32335 15.1749 8.21334 15.3561 8.08247 15.5493C7.81846 15.9391 7.49627 16.3389 7.2556 16.5704C7.01821 16.7988 6.62867 17.0826 6.22139 17.3085C6.01942 17.4205 5.8219 17.5133 5.64521 17.577C5.46282 17.6429 5.32916 17.668 5.24657 17.668C5.18119 17.668 5.1246 17.6814 5.09991 17.6876C5.0652 17.6963 5.02928 17.7077 4.99374 17.7211C4.92325 17.7476 4.83924 17.7873 4.75603 17.8433C4.59705 17.9503 4.375 18.166 4.375 18.5064C4.375 18.6841 4.4167 18.8345 4.48879 18.9649C4.5519 19.0791 4.63301 19.1658 4.6797 19.2157L4.68663 19.2231L4.69955 19.2369C4.95631 19.5132 5.38132 19.7054 5.79392 19.8373C6.14844 19.9506 6.54482 20.035 6.93106 20.0857C6.93652 20.1106 6.94222 20.1374 6.94846 20.1669L6.95047 20.1763C6.97479 20.291 7.007 20.4429 7.05443 20.583C7.09919 20.7151 7.18024 20.9105 7.34618 21.0497C7.55753 21.2269 7.83395 21.2449 8.0143 21.2441C8.20791 21.2433 8.43396 21.2161 8.64845 21.1902L8.66671 21.188C8.96852 21.1516 9.28425 21.1141 9.61127 21.1141C10.2081 21.1141 10.5906 21.3634 11.1907 21.7733L11.1948 21.776C11.4027 21.918 11.6354 22.077 11.9 22.2333C12.7857 22.7567 13.5052 22.7521 13.9131 22.7496C13.94 22.7494 13.9656 22.7493 13.9897 22.7493C14.0139 22.7493 14.0395 22.7494 14.0666 22.7496C14.4751 22.7522 15.2139 22.7569 16.1 22.2333C16.3646 22.077 16.5973 21.918 16.8052 21.776L16.8093 21.7733C17.4094 21.3634 17.7919 21.1141 18.3887 21.1141C18.7157 21.1141 19.0315 21.1516 19.3333 21.188L19.3516 21.1902C19.566 21.2161 19.7921 21.2433 19.9857 21.2441C20.1661 21.2449 20.4425 21.2269 20.6538 21.0497C20.8198 20.9105 20.9008 20.7151 20.9456 20.583C20.993 20.4429 21.0252 20.291 21.0495 20.1763L21.0515 20.1669C21.0578 20.1374 21.0635 20.1106 21.0689 20.0857C21.4552 20.035 21.8516 19.9506 22.2061 19.8373C22.6187 19.7054 23.0437 19.5131 23.3005 19.2369L23.3134 19.2231L23.3203 19.2157C23.367 19.1658 23.4481 19.0791 23.5112 18.9649C23.5833 18.8345 23.625 18.6841 23.625 18.5064C23.625 18.166 23.403 17.9503 23.244 17.8433C23.1608 17.7873 23.0767 17.7476 23.0063 17.7211C22.9707 17.7077 22.9348 17.6963 22.9001 17.6876C22.8754 17.6814 22.8188 17.668 22.7534 17.668C22.6708 17.668 22.5372 17.6429 22.3548 17.577C22.1781 17.5133 21.9806 17.4205 21.7786 17.3085C21.3713 17.0826 20.9818 16.7988 20.7444 16.5704C20.5037 16.3389 20.1815 15.9391 19.9175 15.5493C19.7867 15.3561 19.6767 15.1749 19.6012 15.0275C19.5634 14.9537 19.5375 14.8946 19.522 14.8509C19.5144 14.8297 19.5109 14.8166 19.5095 14.8106C19.5116 14.7681 19.5288 14.7233 19.6423 14.6526C19.788 14.5618 19.9994 14.4896 20.2879 14.395L20.3146 14.3863C20.584 14.298 20.9245 14.1865 21.1944 14.0118C21.4984 13.8152 21.7583 13.5086 21.7583 13.0467C21.7583 12.6774 21.5485 12.372 21.303 12.1733C21.0559 11.9734 20.7231 11.8386 20.3789 11.8386C20.0382 11.8386 19.7932 11.9562 19.6321 12.0336L19.6195 12.0397C19.5284 12.0833 19.4709 12.1088 19.4241 12.1224C19.4638 11.5565 19.5092 10.7882 19.5092 10.2145C19.5092 9.43573 19.2261 8.20666 18.3973 7.16232ZM10.3103 7.67614C9.60939 8.55355 9.36924 9.59539 9.36924 10.2145C9.36924 10.7886 9.41787 11.5862 9.45891 12.158C9.47254 12.3479 9.4336 12.5693 9.26773 12.7451C9.09984 12.923 8.87144 12.9807 8.6674 12.9807C8.37278 12.9807 8.1487 12.8729 8.00536 12.804L7.98871 12.796C7.82878 12.7193 7.7447 12.6836 7.62108 12.6836C7.50862 12.6836 7.37132 12.7319 7.26245 12.82C7.15209 12.9093 7.1201 12.9967 7.1201 13.0467C7.1201 13.1485 7.15766 13.2213 7.2957 13.3106C7.45874 13.416 7.69104 13.4953 7.99557 13.5952L8.02208 13.6039C8.27498 13.6867 8.58822 13.7894 8.83541 13.9434C9.11288 14.1164 9.36924 14.3944 9.36924 14.8226C9.36924 14.9349 9.3382 15.0429 9.30907 15.1247C9.27745 15.2135 9.23472 15.3073 9.18684 15.4009C9.09088 15.5883 8.96111 15.8 8.81848 16.0106C8.53548 16.4284 8.17574 16.8803 7.87675 17.1679C7.57448 17.4587 7.1199 17.7855 6.66014 18.0405C6.42859 18.1689 6.18685 18.2841 5.95374 18.3682C5.74508 18.4435 5.5202 18.5025 5.30446 18.5117C5.29908 18.514 5.29314 18.5167 5.28692 18.5198C5.27698 18.5248 5.26767 18.5302 5.25956 18.5357L5.2554 18.5386C5.25622 18.5444 5.25715 18.5487 5.25792 18.5517C5.25965 18.5585 5.2617 18.5633 5.26446 18.5683C5.27292 18.5836 5.28625 18.6007 5.34022 18.6585L5.35437 18.6737C5.45158 18.7783 5.69114 18.914 6.07088 19.0353C6.43254 19.1509 6.86021 19.2344 7.26426 19.2727C7.46642 19.2919 7.58294 19.4182 7.63225 19.4863C7.68302 19.5564 7.71205 19.6303 7.72901 19.6794C7.76184 19.7745 7.78662 19.8915 7.80618 19.9838L7.80915 19.9979C7.83585 20.1237 7.8592 20.2313 7.88965 20.3212C7.90042 20.353 7.91035 20.3772 7.9189 20.395C7.93818 20.3972 7.96774 20.3993 8.01056 20.3991C8.19635 20.3983 8.38236 20.3707 8.56644 20.3485C8.86094 20.313 9.2254 20.2691 9.61127 20.2691C10.5062 20.2691 11.0967 20.6726 11.6672 21.0623L11.6992 21.0842C11.9103 21.2284 12.1219 21.3727 12.3598 21.5133C13.0302 21.9095 13.5404 21.9066 13.9131 21.9045C13.9393 21.9044 13.9648 21.9042 13.9897 21.9042C14.0144 21.9042 14.0398 21.9044 14.0659 21.9045C14.4427 21.9065 14.9699 21.9094 15.6402 21.5133C15.8781 21.3727 16.0897 21.2284 16.3008 21.0842L16.3328 21.0623C16.9032 20.6726 17.4938 20.2691 18.3887 20.2691C18.7746 20.2691 19.1391 20.313 19.4336 20.3485L19.4425 20.3495C19.6806 20.3782 19.8549 20.3985 19.9894 20.3991C20.0323 20.3993 20.0618 20.3972 20.0811 20.395C20.0896 20.3772 20.0996 20.353 20.1103 20.3212C20.1408 20.2313 20.1642 20.1237 20.1908 19.9979L20.1938 19.9838C20.2134 19.8915 20.2382 19.7745 20.271 19.6794C20.2879 19.6303 20.317 19.5564 20.3678 19.4863C20.4171 19.4182 20.5336 19.2919 20.7357 19.2727C21.1398 19.2344 21.5675 19.1509 21.9291 19.0353C22.3089 18.914 22.5484 18.7783 22.6456 18.6737L22.6598 18.6585C22.7137 18.6007 22.7271 18.5836 22.7355 18.5683C22.7383 18.5633 22.7403 18.5585 22.7421 18.5517C22.7428 18.5487 22.7438 18.5444 22.7446 18.5386L22.7404 18.5357C22.7323 18.5302 22.723 18.5248 22.7131 18.5198C22.7069 18.5167 22.7009 18.514 22.6955 18.5117C22.4798 18.5025 22.2549 18.4435 22.0463 18.3682C21.8132 18.2841 21.5714 18.1689 21.3399 18.0405C20.8801 17.7855 20.4255 17.4587 20.1232 17.1679C19.8243 16.8803 19.4645 16.4284 19.1815 16.0106C19.0389 15.8 18.9091 15.5883 18.8132 15.4009C18.7653 15.3073 18.7226 15.2135 18.6909 15.1247C18.6618 15.0429 18.6308 14.9349 18.6308 14.8226C18.6308 14.3944 18.8871 14.1164 19.1646 13.9434C19.4118 13.7894 19.725 13.6867 19.9779 13.6039L20.0044 13.5952C20.309 13.4953 20.5413 13.416 20.7043 13.3106C20.8423 13.2213 20.8799 13.1485 20.8799 13.0467C20.8799 12.9967 20.8479 12.9093 20.7375 12.82C20.6287 12.7319 20.4914 12.6836 20.3789 12.6836C20.2553 12.6836 20.1712 12.7193 20.0113 12.796L19.9946 12.804C19.8513 12.8729 19.6272 12.9807 19.3326 12.9807C19.1286 12.9807 18.9002 12.923 18.7323 12.7451C18.5664 12.5693 18.5275 12.3479 18.5411 12.158C18.5821 11.5862 18.6308 10.7886 18.6308 10.2145C18.6308 9.59378 18.3948 8.55183 17.6991 7.67506C17.0195 6.81856 15.8833 6.09503 14.0103 6.09503C12.1371 6.09503 10.9953 6.81877 10.3103 7.67614Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.3127 7.67584C9.61179 8.55325 9.37165 9.59509 9.37165 10.2142C9.37165 10.7883 9.42027 11.5859 9.46132 12.1577C9.47495 12.3476 9.436 12.569 9.27014 12.7448C9.10225 12.9227 8.87385 12.9804 8.66981 12.9804C8.37519 12.9804 8.15111 12.8726 8.00777 12.8037L7.99112 12.7957C7.83119 12.719 7.74711 12.6833 7.62349 12.6833C7.51103 12.6833 7.37373 12.7316 7.26486 12.8197C7.1545 12.909 7.12251 12.9964 7.12251 13.0464C7.12251 13.1482 7.16007 13.221 7.29811 13.3103C7.46114 13.4157 7.69345 13.495 7.99798 13.5949L8.02449 13.6036C8.27739 13.6864 8.59063 13.7891 8.83782 13.9431C9.11529 14.1161 9.37165 14.3941 9.37165 14.8223C9.37165 14.9346 9.34061 15.0426 9.31148 15.1244C9.27985 15.2132 9.23713 15.307 9.18925 15.4006C9.09329 15.588 8.96352 15.7997 8.82088 16.0103C8.53788 16.4281 8.17815 16.88 7.87916 17.1676C7.57689 17.4584 7.12231 17.7852 6.66255 18.0402C6.431 18.1686 6.18926 18.2838 5.95615 18.3679C5.74749 18.4432 5.5226 18.5022 5.30687 18.5114C5.30149 18.5137 5.29555 18.5164 5.28933 18.5195C5.27938 18.5245 5.27008 18.5299 5.26197 18.5354L5.25781 18.5383C5.25863 18.5441 5.25956 18.5484 5.26033 18.5514C5.26206 18.5582 5.26411 18.563 5.26687 18.568C5.27532 18.5833 5.28866 18.6004 5.34262 18.6582L5.35678 18.6734C5.45399 18.778 5.69355 18.9137 6.07329 19.035C6.43495 19.1506 6.86261 19.2341 7.26666 19.2724C7.46882 19.2916 7.58534 19.4179 7.63466 19.486C7.68542 19.5561 7.71446 19.63 7.73142 19.6791C7.76424 19.7742 7.78903 19.8912 7.80859 19.9835L7.81156 19.9976C7.83826 20.1234 7.86161 20.231 7.89206 20.3209C7.90283 20.3527 7.91276 20.3769 7.92131 20.3947C7.94059 20.3969 7.97015 20.399 8.01297 20.3988C8.19876 20.398 8.38477 20.3704 8.56885 20.3482C8.86335 20.3127 9.22781 20.2688 9.61368 20.2688C10.5086 20.2688 11.0992 20.6723 11.6696 21.062L11.7016 21.0839C11.9127 21.2281 12.1243 21.3724 12.3622 21.513C13.0326 21.9092 13.5428 21.9063 13.9155 21.9042C13.9417 21.9041 13.9672 21.9039 13.9921 21.9039C14.0168 21.9039 14.0422 21.9041 14.0683 21.9042C14.4451 21.9062 14.9723 21.9091 15.6426 21.513C15.8805 21.3724 16.0921 21.2281 16.3032 21.0839L16.3352 21.062C16.9057 20.6723 17.4962 20.2688 18.3911 20.2688C18.777 20.2688 19.1415 20.3127 19.436 20.3482L19.4449 20.3492C19.683 20.3779 19.8573 20.3982 19.9918 20.3988C20.0347 20.399 20.0642 20.3969 20.0835 20.3947C20.0921 20.3769 20.102 20.3527 20.1128 20.3209C20.1432 20.231 20.1666 20.1234 20.1933 19.9976L20.1962 19.9835C20.2158 19.8912 20.2406 19.7742 20.2734 19.6791C20.2904 19.63 20.3194 19.5561 20.3702 19.486C20.4195 19.4179 20.536 19.2916 20.7382 19.2724C21.1422 19.2341 21.5699 19.1506 21.9315 19.035C22.3113 18.9137 22.5508 18.778 22.648 18.6734L22.6622 18.6582C22.7161 18.6004 22.7295 18.5833 22.738 18.568C22.7407 18.563 22.7428 18.5582 22.7445 18.5514C22.7453 18.5484 22.7462 18.5441 22.747 18.5383L22.7428 18.5354C22.7347 18.5299 22.7254 18.5245 22.7155 18.5195C22.7093 18.5164 22.7033 18.5137 22.6979 18.5114C22.4822 18.5022 22.2573 18.4432 22.0487 18.3679C21.8156 18.2838 21.5738 18.1686 21.3423 18.0402C20.8825 17.7852 20.4279 17.4584 20.1257 17.1676C19.8267 16.88 19.4669 16.4281 19.1839 16.0103C19.0413 15.7997 18.9115 15.588 18.8156 15.4006C18.7677 15.307 18.725 15.2132 18.6933 15.1244C18.6642 15.0426 18.6332 14.9346 18.6332 14.8223C18.6332 14.3941 18.8895 14.1161 19.167 13.9431C19.4142 13.7891 19.7274 13.6864 19.9803 13.6036L20.0068 13.5949C20.3114 13.495 20.5437 13.4157 20.7067 13.3103C20.8447 13.221 20.8823 13.1482 20.8823 13.0464C20.8823 12.9964 20.8503 12.909 20.74 12.8197C20.6311 12.7316 20.4938 12.6833 20.3813 12.6833C20.2577 12.6833 20.1736 12.719 20.0137 12.7957L19.997 12.8037C19.8537 12.8726 19.6296 12.9804 19.335 12.9804C19.131 12.9804 18.9026 12.9227 18.7347 12.7448C18.5688 12.569 18.5299 12.3476 18.5435 12.1577C18.5845 11.5858 18.6332 10.7883 18.6332 10.2142C18.6332 9.59348 18.3972 8.55153 17.7015 7.67475C17.0219 6.81826 15.8857 6.09473 14.0127 6.09473C12.1395 6.09473 10.9977 6.81847 10.3127 7.67584Z"
                fill="white"
              />
            </svg>{' '}
            <span>ID: 64272</span>
            <p>Gabriela Hudges</p>
          </div>

          <div className={styles.section3}>
            <span>
              Top-up amount ($)<span style={{ color: 'red' }}>*</span>
            </span>
            <p>$100</p>
          </div>
          <div className={styles.section4}>
            <span>Top-up Fee</span>
            <p>$4.49</p>
            <span>VAT</span>
            <p>$4.49</p>
            <p>Amount Due</p>
            <p>$20.48</p>
          </div>
        </div>
        <div className={styles.footer}>
          <button>Cancel</button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.25 8.75V9.45C12.25 10.4301 12.25 10.9201 12.0593 11.2945C11.8915 11.6238 11.6238 11.8915 11.2945 12.0593C10.9201 12.25 10.4301 12.25 9.45 12.25H4.55C3.56991 12.25 3.07986 12.25 2.70552 12.0593C2.37623 11.8915 2.10852 11.6238 1.94074 11.2945C1.75 10.9201 1.75 10.4301 1.75 9.45V8.75M9.91667 5.83333L7 8.75M7 8.75L4.08333 5.83333M7 8.75V1.75"
                stroke="white"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadInvoicePopup;
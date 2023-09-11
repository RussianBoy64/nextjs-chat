"use client";

import { chatInputStore } from "@/store/chatInputStore";
import { MouseEventHandler } from "react";

import Image from "next/image";
import { CloseCircleFilled } from "@ant-design/icons";

import styles from "./uploadBar.module.scss";

const UploadBar = () => {
  const [inputPhotos, removePhoto] = chatInputStore((state) => [
    state.inputPhotos,
    state.removePhoto,
  ]);
  const uploadStyles = `${styles.uploadBar} ${
    inputPhotos.length > 0 ? styles.uploadBar_show : ""
  }`;

  return (
    <div className={uploadStyles}>
      {inputPhotos &&
        inputPhotos.length > 0 &&
        inputPhotos.map((photo, index) => {
          const onClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
            removePhoto(index);
          };

          return (
            <div className={styles.uploadBar__imgWrapper} key={index}>
              <Image
                className={styles.uploadBar__image}
                src={photo}
                fill
                sizes="200px"
                alt="photo"
              />
              <button
                className={styles.uploadBar__removeBtn}
                onClick={onClickHandler}
                type="button"
              >
                <CloseCircleFilled />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default UploadBar;

import React, { useEffect } from 'react';
import './style.scss';
import Modal from '../../layouts/Modal-1/index';
import $ from 'jquery';

function Index(props) {
  console.log(props.data);

  useEffect(() => {}, []);

  return (
    <>
      <article
        className={`project__card ${props.className && props.className}`}
        data-filter={props.data.dataFilter}
      >
        <a
          type="button"
          className="face"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${props.data.img})`,
          }}
        >
          <div className="title-wrapper">
            <div class="title">{props.data.name}</div>
            <div class="subtitle">{props.data.description}</div>
            <a
              type="button"
              onClick={() => props.previewProjectInModal(props.data.id)}
              className="preview-link"
              target="_blank"
            >
              Preview
            </a>
          </div>
        </a>
      </article>
    </>
  );
}

export default Index;

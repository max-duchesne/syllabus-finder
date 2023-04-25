import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function Course(props) {
  const { syllabus } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <tr>
      <td>{syllabus.course}</td>
      <td>{syllabus.instructor}</td>
      <td>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#syllabusModal">
          View Syllabus
        </button>

        <div className="modal fade" id="syllabusModal" tabIndex="-1" aria-labelledby="syllabusModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-xl">
            <div className="modal-content">
              <div className="modal-body">
                <Document file={syllabus.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </td>
    </tr>
  );
}

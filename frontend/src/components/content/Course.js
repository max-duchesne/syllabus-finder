import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

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

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#syllabusModal">
          View Syllabus
        </button>

        <div class="modal fade" id="syllabusModal" tabindex="-1" aria-labelledby="syllabusModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-body">
                <Document file={syllabus.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </td>
    </tr>
  );
}

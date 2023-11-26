import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const TableRow = ({ story }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Table.Row
      key={story._id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800 font-semibold"
    >
      <Table.Cell>{story.userId}</Table.Cell>
      <Table.Cell>{story.partnerId}</Table.Cell>
      <Table.Cell>
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
          gradientMonochrome="lime"
          className="font-semibold"
        >
          Cyan
        </Button>
        <Modal
          dismissible
          show={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        >
          <Modal.Header>Success Story!</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 font-semibold">
              <div className="flex justify-center text-center items-center flex-col gap-5">
                <img src={story.image} className="full_round w-44" />
                <div className="flex flex-col md:flex-row gap-5">
                  <h1 className="flex items-center gap-1">
                    Rating : {story.rating} <FaStar />
                  </h1>
                  <h1>Marriage Date : {story.marriageDate}</h1>
                </div>
                <div>
                  <h1>Story : {story.story}</h1>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;

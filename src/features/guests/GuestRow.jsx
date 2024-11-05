import React from "react";
import styled from "styled-components";

import { useDeleteGuest } from "./useDeleteGuest";
import Table from "../../ui/Table";
import { HiTrash } from "react-icons/hi2";
import { Flag } from "../../ui/Flag";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";


const TrashIcon = styled(HiTrash)`
  cursor: pointer;
`;

const GuestId = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const GuestName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const GuestEmail = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-500);
`;

const GuestNationality = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-500);
`;

const GuestRow = ({ guest }) => {
  const { isDeleting, deleteGuest } = useDeleteGuest();

  const { id, fullName, email, nationality, countryFlag} = guest;
  return (
    <div>
      <Table.Row>
        <GuestId>{id}</GuestId>
        <GuestName>{fullName}</GuestName>
        <GuestEmail>{email}</GuestEmail>
        <GuestNationality>{nationality}</GuestNationality>
        <Flag src={countryFlag} alt={`Flag of ${nationality}`} />
        <Modal>
            <Modal.Open opens="delete">
            <TrashIcon size={24} onClick={() => deleteGuest(guest.id)} />
            </Modal.Open>
            <Modal.Window name="delete">
                <ConfirmDelete
                resourceName="guests"
                disabled={isDeleting}
                onConfirm={() => deleteGuest(guest.id)}
              />
            </Modal.Window>
        </Modal>
      </Table.Row>
    </div>
  );
};

export default GuestRow;

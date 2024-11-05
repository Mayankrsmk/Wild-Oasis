import React from 'react'
import { useGuests } from './useGuests'
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import GuestRow from './GuestRow';
import Spinner from '../../ui/Spinner';
import Empty from '../../ui/Empty';

const GuestTable = () => {
    const {isLoading,guests} = useGuests();
    if(isLoading) return <Spinner />;
    if(!guests.length) return <Empty resourceName='guests' />;

    // Sort guests by created_at in descending order
    const sortedGuests = [...guests].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <Menus>
            <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
                <Table.Header>
                    <div>ID</div>
                    <div>Full Name</div>
                    <div>Email</div>
                    <div>Nationality</div>
                    <div>Flag</div>
                </Table.Header>
                <Table.Body
                    data={sortedGuests}
                    render={(guest) => <GuestRow key={guest.id} guest={guest} />}
                />
            </Table>
        </Menus>
    )
}

export default GuestTable

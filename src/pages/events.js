import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Layout from '../components/layout';
import SEO from '../components/seo';


const EventsPage = () => {
    const eventsData = [{
        date: 'November 9, 2019',
        tournament: 'MacIntro IV',
        location: 'Hamilton, ON',
        contact: ''
    },
    {
        date: 'December 7, 2019',
        tournament: 'University of Toronto Novice Tournament',
        location: 'Toronto, ON',
        contact: ''
    }];

    const columns = [{
        Header: 'Date',
        accessor: 'date'
    },
    {
        Header: 'Tournament',
        accessor: 'tournament'
    },
    {
        Header: 'Location',
        accessor: 'location'
    },
    {
        Header: 'Contact',
        accessor: 'contact'
    }
    ]
    return (
        <Layout>
            <SEO title="Events" />
            <ReactTable
                data={eventsData}
                columns={columns}
                defaultPageSize={eventsData.length}
                showPagination={false}
            />
        </Layout>
    )
}

export default EventsPage;

import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './events.css';


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
    }
];

    const columns = [{
        Header: 'Date',
        accessor: 'date',
        width: 150
    },
    {
        Header: 'Tournament',
        accessor: 'tournament',
        width: 300
    },
    {
        Header: 'Location',
        accessor: 'location',
        width: 125
    },
    {
        Header: 'Contact',
        accessor: 'contact'
    }
    ]
    return (
        <Layout>
            <SEO title="Events" />
            <p>Details about upcoming tournaments can be found here:</p>
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

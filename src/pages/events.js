import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './events.css';


const EventsPage = () => {
    const eventsData = [{
        date: 'Oct. 5, 2019',
        tournament: 'Early Fall Tournament @ U of T',
        difficulty: 'University*',
        location: 'Toronto, ON',
        contact: 'cwasims [at] gmail.com'
    },
    {
        date: 'Nov. 9, 2019',
        tournament: 'Fall Quizbowl Open @ U of T',
        difficulty: 'High School',
        location: 'Toronto, ON',
        contact: 'rmz.chen [at] mail.utoronto.ca'
    },
    {
        date: 'Nov. 16, 2019',
        tournament: 'SCOP Novice @ Lisgar',
        difficulty: 'High School',
        location: 'Ottawa, ON',
        contact: 'TBD'
    },
    {
        date: 'Dec. 7, 2019',
        tournament: 'Fall Quizbowl Open @ Carleton',
        difficulty: 'High School',
        location: 'Ottawa, ON',
        contact: 'meghan.torchia [at] mail.utoronto.ca'
    }
];

    const columns = [{
        Header: 'Date',
        accessor: 'date',
        width: 100
    },
    {
        Header: 'Tournament',
        accessor: 'tournament',
        width: 250
    },
    {
        Header: 'Difficulty',
        accessor: 'difficulty',
        width: 100
    },
    {
        Header: 'Location',
        accessor: 'location',
        width: 100
    },
    {
        Header: 'Contact',
        accessor: 'contact',
        className: 'contact-column'
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
            <p>* This is a collegiate level tournament that is open to both high school and university teams.</p>
        </Layout>
    )
}

export default EventsPage;

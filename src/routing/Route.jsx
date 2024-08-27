import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from '../Dashboard'
import NotFound from '../NotFound'
import FeedbackForm from '../FeedbackForm'
import ViewSubmission from '../ViewSubmission'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Dashboard/> 
            },
            {
                path: '*',
                element: <NotFound/>
            },
            {
                path: '/feedbackform/:id',
                element: <FeedbackForm/>
            },
            {
                path: '/view/:id',
                element: <ViewSubmission/>
            }
        ]
    }
])

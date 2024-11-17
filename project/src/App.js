import Card from "./components/Card"
import './main.css'
import React, { useEffect } from "react";

const data = {
  tickets:[
            {"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},
            {"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},
            {"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},
            {"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},
            {"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"Done","priority":0},
            {"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},
            {"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},
            {"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"Done","priority":3},
            {"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},
            {"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Cancelled","priority":1}
          ],
  users:[
    {"id":"usr-1","name":"Anoop sharma","available":false},
    {"id":"usr-2","name":"Yogesh","available":true},
    {"id":"usr-3","name":"Shankar Kumar","available":true},
    {"id":"usr-4","name":"Ramesh","available":true},
    {"id":"usr-5","name":"Suresh","available":true}
  ]
}

function App() {
  useEffect(() => {
    document.title = "Front-End Assignment";
  }, []); 

  const statuses = [ "Backlog","Todo", "In progress","Done", "Cancelled"];
  const groupedTickets = data.tickets.reduce((acc, ticket) => {
    if (!acc[ticket.status]) acc[ticket.status] = [];
    acc[ticket.status].push(ticket);
    return acc;
  }, {});

  Object.keys(groupedTickets).forEach((status) => {
    groupedTickets[status].sort((a, b) => a.priority - b.priority);
  });

  return (
    
<div className="App">
    
      <header className="App-header">
        <h1>Kanban Board</h1>
      </header>
      <nav>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 10.5C9.63261 10.5 9.75979 10.5527 9.85355 10.6464C9.94732 10.7402 10 10.8674 10 11V14C10 14.1326 9.94732 14.2598 9.85355 14.3536C9.75979 14.4473 9.63261 14.5 9.5 14.5H8.5C8.36739 14.5 8.24021 14.4473 8.14645 14.3536C8.05268 14.2598 8 14.1326 8 14V11C8 10.8674 8.05268 10.7402 8.14645 10.6464C8.24021 10.5527 8.36739 10.5 8.5 10.5H9.5ZM7 11.5V13H1.75C1.55109 13 1.36032 12.921 1.21967 12.7803C1.07902 12.6397 1 12.4489 1 12.25C1 12.0511 1.07902 11.8603 1.21967 11.7197C1.36032 11.579 1.55109 11.5 1.75 11.5H7ZM14.25 11.5C14.4489 11.5 14.6397 11.579 14.7803 11.7197C14.921 11.8603 15 12.0511 15 12.25C15 12.4489 14.921 12.6397 14.7803 12.7803C14.6397 12.921 14.4489 13 14.25 13H11V11.5H14.25ZM5.5 6C5.63261 6 5.75979 6.05268 5.85355 6.14645C5.94732 6.24021 6 6.36739 6 6.5V9.5C6 9.63261 5.94732 9.75979 5.85355 9.85355C5.75979 9.94732 5.63261 10 5.5 10H4.5C4.36739 10 4.24021 9.94732 4.14645 9.85355C4.05268 9.75979 4 9.63261 4 9.5V6.5C4 6.36739 4.05268 6.24021 4.14645 6.14645C4.24021 6.05268 4.36739 6 4.5 6H5.5ZM3 7.25V8.75H1.75C1.55109 8.75 1.36032 8.67098 1.21967 8.53033C1.07902 8.38968 1 8.19891 1 8C1 7.80109 1.07902 7.61032 1.21967 7.46967C1.36032 7.32902 1.55109 7.25 1.75 7.25H3ZM14.25 7.25C14.4489 7.25 14.6397 7.32902 14.7803 7.46967C14.921 7.61032 15 7.80109 15 8C15 8.19891 14.921 8.38968 14.7803 8.53033C14.6397 8.67098 14.4489 8.75 14.25 8.75H7V7.25H14.25ZM11.5 1.75C11.6326 1.75 11.7598 1.80268 11.8536 1.89645C11.9473 1.99021 12 2.11739 12 2.25V5.25C12 5.38261 11.9473 5.50979 11.8536 5.60355C11.7598 5.69732 11.6326 5.75 11.5 5.75H10.5C10.3674 5.75 10.2402 5.69732 10.1464 5.60355C10.0527 5.50979 10 5.38261 10 5.25V2.25C10 2.11739 10.0527 1.99021 10.1464 1.89645C10.2402 1.80268 10.3674 1.75 10.5 1.75H11.5ZM9 3V4.5H1.75C1.55109 4.5 1.36032 4.42098 1.21967 4.28033C1.07902 4.13968 1 3.94891 1 3.75C1 3.55109 1.07902 3.36032 1.21967 3.21967C1.36032 3.07902 1.55109 3 1.75 3H9ZM14.25 3C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75C15 3.94891 14.921 4.13968 14.7803 4.28033C14.6397 4.42098 14.4489 4.5 14.25 4.5H13V3H14.25Z" fill="#5C5C5E"/>
      </svg>
        <span className="display_button">Display</span>

      </nav>
      <main className="columns-container">
        {statuses.map((status) => (
          <div key={status} className="column">
            <h2 className="column-title">
            

            {status === "Done" && (
                <svg className="iconi" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="#5E6AD2" stroke="#5E6AD2" stroke-width="2"/>
                  <path d="M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7Z" stroke="#5E6AD2" stroke-width="6" stroke-dasharray="18.85 100"/>
                  <path d="M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z" fill="#FBFBFB"/>
                </svg>
              )}

              {status === "Backlog" && (
                <svg className="iconi" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#95999F" stroke-width="2" stroke-dasharray="1.4 1.74"/>
                      </svg>
              )}

              {status === "Cancelled" && (
               <svg className="iconi" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="#96A3B4" stroke="#96A3B4" stroke-width="2"/>
               <path d="M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7Z" stroke="#96A3B4" stroke-width="6" stroke-dasharray="18.85 100"/>
               <path d="M6.99682 7.68089L4.81753 9.86018C4.72008 9.95763 4.60934 10.0041 4.48532 9.99971C4.36129 9.99528 4.25055 9.94434 4.15311 9.84689C4.05566 9.74945 4.00693 9.6365 4.00693 9.50804C4.00693 9.37959 4.05566 9.26663 4.15311 9.16919L6.31911 7.00318L4.13982 4.82388C4.04237 4.72643 3.99586 4.61348 4.00029 4.48503C4.00472 4.35657 4.05566 4.24362 4.15311 4.14617C4.25055 4.04872 4.36351 4 4.49196 4C4.62041 4 4.73337 4.04872 4.83081 4.14617L6.99682 6.32547L9.17612 4.14617C9.27357 4.04872 9.38652 4 9.51497 4C9.64343 4 9.75638 4.04872 9.85383 4.14617C9.95128 4.24362 10 4.35657 10 4.48503C10 4.61348 9.95128 4.72643 9.85383 4.82388L7.67453 7.00318L9.85383 9.18247C9.95128 9.27992 10 9.39066 10 9.51468C10 9.63871 9.95128 9.74945 9.85383 9.84689C9.75638 9.94434 9.64343 9.99307 9.51497 9.99307C9.38652 9.99307 9.27357 9.94434 9.17612 9.84689L6.99682 7.68089Z" fill="#E8EAED"/>
               </svg>
              )}

              {status === "Todo" && (
                <svg className="iconi" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#B8B8B8" stroke-width="2"/>
                </svg>
              )}

              {status === "In progress" && (
                <svg className="iconi" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="white" stroke="#F2BE00" stroke-width="2"/>
                <path d="M9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7Z" stroke="#F2BE00" stroke-width="4"/>
                </svg>
              )}

              {status}
              
              
            </h2>
           
            {groupedTickets[status] && groupedTickets[status].length > 0 ? (
              groupedTickets[status].map((ticket) => {
                const user = data.users.find((user) => user.id === ticket.userId);
                return (
                  <Card
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    tag={ticket.tag[0]}
                    user={user ? user.name : "Unknown"}
                    status={ticket.status}
                    priority={ticket.priority}
                  />
                );
              })
            ) : (
              <p className="no-items">No items</p>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}


export default App;
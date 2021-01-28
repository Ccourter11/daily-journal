// /*
//  *  Purpose: To render a single journal entry as an
//  *           HTML representation of the data
//  */
// export const JournalEntryComponent = (entry) => {
//   return `
//         <section id="entry--${entry.id}" class="journalEntry">
//         <time>${entry.journalDate}</time> - <h3>${entry.conceptsCovered}</h3>
//         <p>${entry.journalEntry}</p>
//         </section>
//     `;
// };
// {
//   /* <article class=".formContainer"></article>; */
// }

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
        <section id="entry--${entry.id}" class="journalEntry">
            <time>${entry.date}</time> - <h3>${entry.concept}</h3>
            <p>${entry.entry}</p>
        </section>
    `;
};

export { formatNameInitials, formatFullName, formatShortName }

function formatNameInitials(author) {
  return `${author.lastname} ${author.firstname[0]}. ${author.middlename[0]}.`;
}

function formatFullName(author) {
  return `${author.firstname} ${author.middlename} ${author.lastname}`;
}

function formatShortName(author) {
  return `${author.firstname} ${author.lastname}`;
}

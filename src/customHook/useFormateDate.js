
const useFormateDate = (dateTimeString) => {
    
        const date = new Date(dateTimeString);
        const year = date.getFullYear();
        const monthIndex = date.getMonth();
        const day = String(date.getDate()).padStart(2, '0');

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const monthName = monthNames[monthIndex];
        const fromatedDate=`${day} ${monthName},${year}`;
        return fromatedDate
    
}

export default useFormateDate

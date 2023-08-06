interface props {
    title: string ,
    titleNo : string
}
const SectionTitle = ({title, titleNo} : props) => {
    return (
        <div>
            <h2 className="font-titleFont text-2xl font-semibold flex items-center gap-1"> <span className="text-base md:text-lg text-textGreen  mr-2">{titleNo}</span>{title}
            <span className="hidden md:inline-flex w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
            </h2>
        </div>
    );
};

export default SectionTitle;
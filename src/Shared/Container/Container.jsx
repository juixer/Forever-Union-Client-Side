const Container = ({children}) => {
    return (
        <div className="min-h-[calc(100vh-265px)]">
            {children}
        </div>
    );
};

export default Container;
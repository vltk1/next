export const button = {
    normal({icon, children}:any){
        return <>
            <div className="flex justify-start items-center">
                <i>{icon}</i>
                {children}
            </div>
        </>
    }
}
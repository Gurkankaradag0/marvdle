import Footer from '@/components/Footer'
import Header from '@/components/Header'

const HomeLayoutContainer = ({ children }) => {
    return (
        <>
            <Header />
            <main className='flex-1 flex flex-col items-center mt-8 gap-2'>{children}</main>
            <Footer />
        </>
    )
}

export default HomeLayoutContainer

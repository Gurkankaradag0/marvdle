import Highlight from '@/components/Highlight'
import OptOut from '@/components/PrivacyPolicy/OptOut'
import Successfully from '@/components/PrivacyPolicy/OptOut/Successfully'
import useLocaleServer from '@/hooks/useLocaleServer'

const PrivacyPolicyContainer = ({ searchParams }) => {
    const locale = useLocaleServer()

    return (
        <div className='flex flex-col max-[520px]:w-[85%] max-[720px]:w-3/4 max-[960px]:w-[65%] w-1/2 text-shadow-black-md gap-4 bg-marvel-black py-8 px-4 border-2 border-marvel-red mb-8'>
            <h1 className='text-3xl font-bold'>{locale.privacyPolicy.title}</h1>
            <h3 className='text-xl font-semibold'>{locale.privacyPolicy.commonid.title}</h3>
            <p className='whitespace-break-spaces'>
                <Highlight
                    text={locale.privacyPolicy.commonid.desc}
                    match={locale.privacyPolicy.commonid.matcher}
                    render={(text) => <OptOut text={text} />}
                />
                <Successfully searchParams={searchParams} />
            </p>
        </div>
    )
}

export default PrivacyPolicyContainer

import { ChangeEvent, FormEvent, memo, MemoExoticComponent, VFC } from "react";

interface Props {
    printMsg: () => void
    handleSubmit:  (e: FormEvent<HTMLFormElement>) => Promise<void>
}

export const Child: VFC<Props> = memo(({ printMsg }) => {
    return (
        <>
        <p>Chiled Component</p>
        <button className="my-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none" onClick={printMsg}>click</button>
        </>
    )
})
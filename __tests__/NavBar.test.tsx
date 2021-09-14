import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {getPage} from "next-page-tester";
import {initTestHelpers} from "next-page-tester";
import {count} from "rxjs/operators";

// 初期設定をしてくれる
initTestHelpers()


describe('Navigation by Link', () => {
    it('shold route to selected page in navber', async () => {
        // 取得したいページを取得
        const {page} = await getPage({
            route: "/index"
        })
        render(page)


        // ページ遷移をさせて存在しているかを確かめる
        userEvent.click(screen.getByTestId('blog-nav'))
        expect(await screen.findByText('blog page')).toBeInTheDocument()

    //    コメントのページに遷移する
        userEvent.click(screen.getByTestId('comment-nav'))
        expect(await screen.findByText('comment page')).toBeInTheDocument()

        userEvent.click(screen.getByTestId('context-nav'))
        expect(await screen.findByText('context page')).toBeInTheDocument()

        userEvent.click(screen.getByTestId('task-nav'))
        expect(await screen.findByText('Todos')).toBeInTheDocument()

        userEvent.click(screen.getByTestId('home-nav'))
        expect(await screen.findByText('welcome Hello Nextjs')).toBeInTheDocument()

    })
})
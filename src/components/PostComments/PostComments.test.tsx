import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '../PostComments';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar comentário "aaaaaa" no post', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('comment-area'), {
            target:{
                value:'aaaaaa'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))
        expect(screen.getByText('aaaaaa')).toBeInTheDocument();
    });
    test('Deve adicionar comentário "Que legal!" no post', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('comment-area'), {
            target:{
                value:'Que legal!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))
        expect(screen.getByText('Que legal!')).toBeInTheDocument();
    });

});
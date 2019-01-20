import {s} from '.'

const test1 = 'test1'
const test2 = false && 'test2'
const test3 = true && 'test3'

it('returns undefined when passed no args', () => {
    expect(s()).toBe(undefined)
})

it('returns pure string args unchanged', () => {
    expect(s(test1)).toBe('test1')
    expect(s(test1, test1)).toBe('test1 test1')
})

it('does not return strings preceeded by false statements', () => {
    expect(s(test2)).toBe(undefined)
    expect(s(test1, test2)).toBe('test1')
    expect(s(test1, test2, test3)).toBe('test1 test3')
})

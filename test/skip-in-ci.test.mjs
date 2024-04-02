import { exec } from 'child_process'
import test from 'ava'

test('throw when no args', async t => {
    return await new Promise((resolve) => {
        exec('yarn skip-in-ci', (_err, _stdout, stderr) => {
            t.is(stderr.trim().includes('skip'), true)
            resolve()
        })
    })
})

test('skip in ci', async t => {
    return await new Promise((resolve) => {
        exec('CI=true yarn skip-in-ci echo hello', (_err, stdout, _stderr) => {
            t.is(stdout.trim().includes('Skipping'), true)
            resolve()
        })
    })
})

test('run in local', async t => {
    return await new Promise((resolve) => {
        exec('yarn skip-in-ci echo hello', (_err, stdout, _stderr) => {
            t.is(stdout.trim(), 'hello')
            resolve()
        })
    })
})

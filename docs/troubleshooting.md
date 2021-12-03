# Troubleshooting

- [Vercel 배포시 발생한 이슈](#Vercel-배포시-발생한-이슈)

## Vercel 배포시 발생한 이슈

배포 실패 이슈 발생

```
Treating warnings as errors because process.env.CI = true.

Failed to compile.
```

해결 방법 : 환경 변수의 값을 지정

Vercel Dashboard -> Project -> Settings -> Environment Variables -> Redeploy<br/>
NAME에 CI, VALUE에 false 입력 후 Add

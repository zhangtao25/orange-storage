```ts
@Module({
  imports: [UserModule, ArticleModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}

// JwtAuthGuard 务必要在 RolesGuard前面，执行时机问题，需要在角色验证之前将用户信息设置到request.上
```

[//]: # (前端路由设计的话就简单点，设置一个公共路由，然后再根据用户类型拼装菜单，需要一个菜单生成的组建？)

[//]: # (ProLayout 这种神器一定要用！！！！！！)

docker run zhangtao25/na-example:83fc10c -e DB_CONFIG={"database":{"type":"mysql","host":"114.55.145.3","port":"18306","username":"root","password":"wjyy26303","database":"orange_dev"}}
Unable to find image 'zhangtao25/na-example:83fc10c' locally
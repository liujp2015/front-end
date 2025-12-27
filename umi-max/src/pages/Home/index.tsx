import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { LoginForm, PageContainer, ProFormText } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Alert, Button, message, Tabs } from 'antd';
import { useIntl } from 'umi';
import styles from './index.less';
import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { login } from '@/services/demo/user';
// public目录下的文件直接通过根路径访问，无需导入

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const [type, setType] = useState<string>('account');
  const intl = useIntl();
  const handleSubmit = async (values: Record<string, any>) => {
    console.log(values);
    await login(values);
  };
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <LoginMessage
        content={intl.formatMessage({ id: 'test.test' })}
      ></LoginMessage>
      <Button
        onClick={() => {
          message.success('登录成功');
        }}
      >
        {intl.formatMessage({ id: 'test.test' })}
      </Button>
      <LoginForm  logo={<img alt="logo" src="/logo.svg" />}
       title="标题"
      subTitle="子标题"
onFinish={async (values) => {
            await handleSubmit(values);
          }}
      >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane
              key="account"
              tab={intl.formatMessage({
                id: 'pages.login.accountLogin.tab',
                defaultMessage: '账户密码登录',
              })}
            />
              <Tabs.TabPane
              key="test"
              tab="手机登录"
            />
          </Tabs>
          {/* <div>当前选择的{type}</div> */}
           <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'密码: ant.design'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
      </LoginForm>
 
       
    {/* <img src="/logo.png" alt="" /> */}
    </PageContainer>
  );
};

export default HomePage;

# 期初数据

::: danger
初次登录务必修改初始密码，设置10位以上包含大小写字母和数字的强安全密码，在任何情况下不要泄露给他人；同时务必保证邮箱的正确（找回密码等都需要邮箱）
:::

::: info
期初数据主要是企业已经存在的业务数据如何初始化到系统内，涉及的范围：当前库存、未结采购、未结销售、应付账款、应收账款、期初余额
:::

前提条件：已经安装相应的模块

知识要求：具备基本的计算机操作知识，有ERP系统基本知识

系统权限：系统管理员

## 当前库存
前提条件：已经安装库存模块，系统内已经完成库位设置和产品录入 ( 产品录入操作：[产品设置](product-settings.md) )

盘点当前库存数量，通过盘点单方式录入系统，具体操作：[库存盘点](physical-inventory.md)

## 未结采购
前提条件：已经安装采购模块，系统内已经完成供应商录入（供应商录入操作：供应商管理 ）和产品录入（产品录入操作：产品设置 ）

整理每家供应商尚未交付的采购订单，通过采购订单的方式录入系统，具体操作：采购订单

## 未结销售
前提条件：已经安装销售模块，系统内已经完成客户录入（客户录入操作：客户管理 ）和产品录入（产品录入操作：产品设置 ） 

整理出每家客户尚未交付的销售订单，通过销售订单的方式录入系统，具体操作：销售订单

## 应付账款
前提条件：已经安装开票模块，系统内已经完成会计科目设置（会计设置 ）、完成供应商录入（供应商录入操作：供应商管理 ）、完成产品录入（产品录入操作：产品设置 ）

整理出每家供应商尚未结算的应付账款金额，通过采购账单的方式录入系统，具体操作：应收账款

## 应收账款
前提条件：已经安装开票模块，系统内已经完成会计科目设置（会计设置 ）、系统内已经完成客户录入（客户录入操作：客户管理 ）、以及产品录入（产品录入操作：产品设置 ）

整理出每家客户尚结算的应付账款金额，通过销售结算单的方式录入系统，具体操作：应收账款

## 期初余额
前提条件：已经安装会计模块，系统内已经完成会计科目设置（会计设置 ）

知识要求：初级会计

整理出科目期初金额，通过会计凭证的方式录入系统（会计凭证 ），这些凭证都选择相同的对方科目
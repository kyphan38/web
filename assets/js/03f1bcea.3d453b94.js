"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[8292],{7120:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"leetcode/array","title":"array","description":"To do list","source":"@site/assets/docs/leetcode/array.md","sourceDirName":"leetcode","slug":"/leetcode/array","permalink":"/leetcode/array","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1744032904000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"steps","permalink":"/leetcode/step"},"next":{"title":"array","permalink":"/leetcode/dsa/array"}}');var s=i(4848),r=i(8453);const t={},o="array",a={},c=[{value:"Easy",id:"easy",level:2},{value:"27. Remove Element",id:"27-remove-element",level:3},{value:"118. Pascal&#39;s Triangle",id:"118-pascals-triangle",level:3},{value:"121. Best Time to Buy and Sell Stock",id:"121-best-time-to-buy-and-sell-stock",level:3},{value:"217. Contains Duplicate",id:"217-contains-duplicate",level:3},{value:"Medium",id:"medium",level:2},{value:"Hard",id:"hard",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"array",children:"array"})}),"\n",(0,s.jsx)(e.p,{children:"To do list"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Easy","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"303 Range Sum Query - Immutable"}),"\n",(0,s.jsx)(e.li,{children:"448 Find All Numbers Disappeared in an Array"}),"\n",(0,s.jsx)(e.li,{children:"605 Can Place Flowers"}),"\n",(0,s.jsx)(e.li,{children:"724 Find Pivot Index"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Medium"}),"\n",(0,s.jsx)(e.li,{children:"36 Valid Sudoku"}),"\n",(0,s.jsx)(e.li,{children:"238 Product of Array Except Self"}),"\n",(0,s.jsx)(e.li,{children:"122 Best Time to Buy and Sell Stock II"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"easy",children:"Easy"}),"\n",(0,s.jsx)(e.h3,{id:"27-remove-element",children:"27. Remove Element"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/remove-element/description/",children:"27. Remove Element"})}),"\n",(0,s.jsx)(e.p,{children:"Solution - Sorting"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Time Complexity: O(n log n)"}),"\n",(0,s.jsx)(e.li,{children:"Space Complexity: O(1)"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def removeElement(self, nums: List[int], val: int) -> int:\n    INF = 100\n    count = 0\n    for i in range(len(nums)):\n      if nums[i] == val:\n        nums[i] = INF\n      else:\n        count +=1\n    nums.sort()\n    return count\n"})}),"\n",(0,s.jsx)(e.p,{children:"Solution - Without sorting"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Time Complexity: O(n)"}),"\n",(0,s.jsx)(e.li,{children:"Space Complexity: O(1)"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def removeElement(self, nums: List[int], val: int) -> int:\n    count = 0\n    for i in range(len(nums)):\n      if nums[i] != val:\n        nums[count] = nums[i]\n        count += 1\n    return count\n"})}),"\n",(0,s.jsx)(e.h3,{id:"118-pascals-triangle",children:"118. Pascal's Triangle"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/pascals-triangle/description/",children:"118. Pascal's Triangle"})}),"\n",(0,s.jsx)(e.p,{children:"My solution"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Time Complexity: O(n^2)"}),"\n",(0,s.jsx)(e.li,{children:"Space Complexity: O(n^2)"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def generate(self, numRows: int) -> List[List[int]]:\n    triangle = []\n    for row in range(1, numRows + 1):\n      row_list = []\n      for i in range(row):\n        if i == 0 or i == row - 1:\n          row_list.append(1)\n        else:\n          total = triangle[row - 2][i] + triangle[row - 2][i - 1]\n          row_list.append(total)\n        triangle.append(row_list)\n    return triangle\n"})}),"\n",(0,s.jsx)(e.p,{children:"My improved solution"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Time Complexity: O(n^2)"}),"\n",(0,s.jsx)(e.li,{children:"Space Complexity: O(n^2)"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def generate(self, numRows: int) -> List[List[int]]:\n    triangle = []\n    for row in range(numRows):\n      row_list = [1] * (row + 1)\n      for i in range(1, row):\n        row_list[i] = triangle[row - 1][i] + triangle[row - 1][i - 1]\n      triangle.append(row_list)\n    return triangle\n"})}),"\n",(0,s.jsx)(e.h3,{id:"121-best-time-to-buy-and-sell-stock",children:"121. Best Time to Buy and Sell Stock"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",children:"121. Best Time to Buy and Sell Stock"})}),"\n",(0,s.jsx)(e.p,{children:"Solution"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Time Complexity: O(n)"}),"\n",(0,s.jsx)(e.li,{children:"Space Complexity: O(1)"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def maxProfit(self, prices: List[int]) -> int:\n    minPrice = prices[0]\n    maxProfit = 0\n    for i in range(1, len(prices)):\n      profit = prices[i] - minPrice\n      maxProfit = max(maxProfit, profit)\n      minPrice = min(minPrice, prices[i])\n      return maxProfit\n"})}),"\n",(0,s.jsx)(e.h3,{id:"217-contains-duplicate",children:"217. Contains Duplicate"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/contains-duplicate/description/",children:"217. Contains Duplicate"})}),"\n",(0,s.jsx)(e.p,{children:"My solution"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Time Complexity: O(n)"}),"\n",(0,s.jsx)(e.li,{children:"Space Complexity: O(n) - Hashmap"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def containsDuplicate(self, nums: List[int]) -> bool:\n    seen_nums = {}\n    flag = False\n    for num in nums:\n      if num not in seen_nums:\n        seen_nums[num] = 1\n      else:\n        flag = True\n    return flag\n"})}),"\n",(0,s.jsx)(e.p,{children:"My improved solution"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Time Complexity: O(n)"}),"\n",(0,s.jsx)(e.li,{children:"Space Complexity: O(n) - Hashmap"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def containsDuplicate(self, nums: List[int]) -> bool:\n    seen_nums = {}\n    for num in nums:\n      if num in seen_nums:\n        return True\n      seen_nums[num] = 1\n    return False\n"})}),"\n",(0,s.jsx)(e.p,{children:"Solution - Sorting"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Time Complexity: O(n log n)"}),"\n",(0,s.jsx)(e.li,{children:"Space Complexity: O(1)"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def containsDuplicate(self, nums: List[int]) -> bool:\n    nums.sort()\n    for i in range(1, len(nums)):\n      if nums[i] == nums[i-1]:\n        return True\n    return False\n"})}),"\n",(0,s.jsx)(e.p,{children:"Solution - Set"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Set only stores keys \u2192 Less memory"}),"\n",(0,s.jsx)(e.li,{children:"Time Complexity: O(n)"}),"\n",(0,s.jsx)(e.li,{children:"Space Complexity: O(n) - Set"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def containsDuplicate(self, nums: List[int]) -> bool:\n    seen_nums = set()\n    for num in nums:\n      if num in seen_nums:\n        return True\n      seen_nums.add(num)\n      return False\n"})}),"\n",(0,s.jsx)(e.h2,{id:"medium",children:"Medium"}),"\n",(0,s.jsx)(e.h2,{id:"hard",children:"Hard"})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>o});var l=i(6540);const s={},r=l.createContext(s);function t(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);
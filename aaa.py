rubin = 1
print(rubin)
rubin = "바보"
print(rubin)

kdt = {
  "305" : "홀쭉",
  "공욱재" : "미남",
}
print(kdt["공욱재"])

kdt_order = ["우리는", "개발자", "입니다"]
print(kdt_order[0], kdt_order[1], kdt_order[2])

for index in kdt_order:
  print(index)

def percent_calc(first_value, second_value):
  result = (first_value / second_value) * 100
  return result

print(percent_calc(47, 100))
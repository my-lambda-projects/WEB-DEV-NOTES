# def example(arg_1, arg_2, *args, kw_1="shark", kw_2="blowfish", **kwargs):
#   print("arg_1", arg_1)
#   print("arg_2", arg_2)
#   print("args", args)
#   print("kw_1", kw_1)
#   print("kw_2", kw_2)
#   print("kwargs", kwargs)

# example(1, 2, 3, 4, kw_1=5, kw_2=6, kw_3=7)

def example2(arg_1, arg_2, *args, **kwargs):
  print("arg_1", arg_1)
  print("arg_2", arg_2)
  print("args", args)
  print("kwargs", kwargs)

example2(1, 2, 3, 4, kw_1=5, kw_2=6, kw_3=7)

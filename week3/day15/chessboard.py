def chessboard():
   tile = False
   board = ''
   for i in range(64):
      if (i != 0 and i % 8 == 0) :
         board += "\n"
         tile = not tile
      if tile == True:
         board += " "
      else:
         board += "#"
      tile = not tile
   return board
print(chessboard())

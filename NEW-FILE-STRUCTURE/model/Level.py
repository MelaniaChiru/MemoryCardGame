class Level():
    def __init__(self, level_num, name, row, column, sun, water, tractor, cloud, bug, scissor, grass):
        self.level_num = level_num
        self.name = name
        self.row = row
        self.column = column
        self.sun = sun
        self.water = water
        self.tractor = tractor
        self.cloud = cloud
        self.bug = bug
        self.scissor = scissor
        self.grass = grass
    
    def level_id(self):
        return self.level_num